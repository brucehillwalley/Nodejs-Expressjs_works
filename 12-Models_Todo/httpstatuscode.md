HTTP durum kodları, bir HTTP isteğinin sonucunu ifade eden kodlardır. Bu kodlar, bir web sunucusunun istemciye (örneğin, bir web tarayıcısına) bir isteğin nasıl işlendiğini bildirmek için kullanılır. Durum kodları beş gruba ayrılır ve her grup, yüzler basamağındaki sayı ile temsil edilir. İşte HTTP durum kodlarının bir tablosu:

### 1xx: Bilgilendirici Yanıtlar
- `100 Continue`: İstemci, isteğinin başlangıç kısmını sunucuya göndermeli.
- `101 Switching Protocols`: Sunucu, istemcinin protokol değiştirme talebini kabul etti.
- `102 Processing` (WebDAV): İsteğin işlenmekte olduğunu belirtir.

### 2xx: Başarılı Yanıtlar
- `200 OK`: İstek başarılı.
- `201 Created`: İstek başarılı ve yeni bir kaynak oluşturuldu.
- `202 Accepted`: İstek alındı ancak henüz işlenmedi.
- `203 Non-Authoritative Information`: Sunucu, dönüş bilgisini bir üçüncü partiden aldı.
- `204 No Content`: İstek başarılı ancak döndürülecek içerik yok.
- `205 Reset Content`: İstek başarılı, istemci belge görünümünü sıfırlamalı.
- `206 Partial Content`: Sunucu, istenen aralıklardan bazılarını başarıyla işledi.

### 3xx: Yönlendirme
- `300 Multiple Choices`: İstek, birden fazla olası yanıtla eşleşiyor.
- `301 Moved Permanently`: Kaynak kalıcı olarak yeni bir URL'ye taşındı.
- `302 Found`: Bu yanıt kodu, `303 See Other`'a tercih edilmemesine rağmen yaygın olarak kullanılır.
- `303 See Other`: İstemci, başka bir URI'ye GET yöntemiyle erişmeli.
- `304 Not Modified`: Kaynak değişmedi, bu yüzden tarayıcı önbelleğini kullanabilir.
- `307 Temporary Redirect`: Kaynak geçici olarak farklı bir URI'ye yönlendirildi.
- `308 Permanent Redirect`: Kaynak kalıcı olarak farklı bir URI'ye yönlendirildi.

### 4xx: İstemci Hataları
- `400 Bad Request`: Sunucu, isteği işleme koymadı çünkü istemci hatası algılandı.
- `401 Unauthorized`: Bu yanıt, kimlik doğrulama için giriş yapılması gerektiğini belirtir.
- `403 Forbidden`: Sunucu isteği anladı ama yanıt vermeyi reddediyor.
- `404 Not Found`: Sunucu, istenen kaynağı bulamadı.
- `405 Method Not Allowed`: İstek yöntemi, kaynak için izin verilen yöntemlerden biri değil.
- `406 Not Acceptable`: İstenen kaynak, istemcinin Accept başlıklarında belirtilen kriterleri karşılamıyor.
- `407 Proxy Authentication Required`: İstemci, önce kendisini proxy sunucusu ile doğrulamalıdır.
- `408 Request Timeout`: Sunucu, istemcinin isteğini beklerken zaman aşımına uğradı.
- `409 Conflict`: İstek, sunucunun geçerli durumuyla çakışıyor.

### 5xx: Sunucu Hataları
- `500 Internal Server Error`: Sunucu, beklenmedik bir durumla karşılaştı ve isteği yerine getiremedi.
- `501 Not Implemented`: Sunucu, isteği yerine getirecek yeteneklere sahip değil.
- `502 Bad Gateway`: Sunucu, bir üst sunucudan geçersiz bir yanıt aldı.
- `503 Service Unavailable`: Sunucu, geçici bir aşırı yük veya bakım nedeniyle kullanılamıyor.
- `504 Gateway Timeout`: Sunucu, bir üst sunucudan zamanında yanıt alamadı.
- `505 HTTP Version Not Supported`: Sunucu, istekte kullanılan HTTP sürümünü desteklemiyor.

Bu durum kodları, HTTP/1.1 standardında tanımlanmıştır ve HTTP/2 ile de kullanılmaktadır.