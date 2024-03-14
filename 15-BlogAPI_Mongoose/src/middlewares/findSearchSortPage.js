"use strict";
/* ====================================================== */
/*                     BLOG API             */
/* ====================================================== */

module.exports = (req, res, next) => {
  /* FILTERING & SEARCHING & SORTING & PAGINATION */

  // FILTERING:
  // URL?filter[key1]=value1&filter[key2]=value2
  const filter = req.query?.filter || {}; // requestteki sorgudan filter objesini al gelmezse bos obje ata.
  // console.log(filter);

  // SEARCHING:
  // URL?search[key1]=value1&search[key2]=value2
  // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
  const search = req.query?.search || {};
  // console.log(search);
  // { title: 'test', content: 'test' } -> { title: { $regex: 'test' }, content: { $regex: 'test' } }
  for (let key in search) {
    search[key] = { $regex: search[key], $options: "i" }; // i: insensitive
  }
  // console.log(search);

  // SORTING:
  // URL?sort[key1]=asc&sort[key2]=desc
  // asc: 1 - desc: -1  //deprecated
  // 1: A-Z / -1: Z-A
  // asc: A-Z - desc: Z-A
  const sort = req.query?.sort || {}; // a dan z ye veya z den a ya siralama yapmak icin yazilan fonk. .sort() ile kullanilir.
  // console.log(sort);

  // PAGINATION:
  // URL?page=3&limit=10

  // Limit
  let limit = Number(req.query?.limit);
  // console.log(limit)
  limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE); // limit gonderildiyse limit al yoksa veya yanlis gonderildiyse default 20
  // env deki veriler stringdir o yuzden page size i da sayiya ceviriyoruz
  console.log("limit", limit);

  // Page:
  let page = Number(req.query?.page); // Page number olmak ve birden buyuk olmak zorunda default 1
  // page = page > 0 ? page : 1
  page = page > 0 ? page - 1 : 0; // Backend'de sayfa sayisi her zaman page-1 olarak hesaplanmali
  console.log("page", page);

  // Skip:
  // LIMIT 20, 10 => 20tane kayit atla limit kadar getir
  let skip = Number(req.query?.skip);
  skip = skip > 0 ? skip : page * limit;
  console.log("skip", page);

  /* FILTERING & SEARCHING & SORTING & PAGINATION */

  // const data = await BlogPost.find({ ...filter, ...search })
  // .sort(sort).skip(skip)
  // .limit(limit);

  res.getModelList = async function (Model, populate = null) {
    return await Model.find({ ...filter, ...search })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate)
  };



  res.getModelListDetails = async (Model) => {

    const data = await Model.find({ ...filter, ...search })

    let details = {
        filter,
        search,
        sort,
        skip,
        limit,
        page,
        pages: {
            previous: (page > 0 ? page : false),
            current: page + 1,
            next: page + 2,
            total: Math.ceil(data.length / limit)
        },
        totalRecords: data.length,
    }
    details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next)
    if (details.totalRecords <= limit) details.pages = false
    return details
}

  next();
};

