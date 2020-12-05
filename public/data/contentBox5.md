# MDINFO{"header": "Bảng cửu chương (Multiplication table)","description": "","time": "2020-12-06 10:00 AM"}
# In Bảng cửu chương (Multiplication table)

> Vào một ngày trăng thanh gió mát, có một tiểu huynh đệ đang đi hành tẩu trên giang hồ để tìm kiếm một minh sư học đạo. Vào ngày nọ, với tiếng lành đồn xa, vị tiểu huynh đệ cũng tìm đến được một vị minh sư ẩn cư ở trên núi Mạch. Nhưng để được gặp ông thì cũng phải vượt qua vài thử thách gian nan.

Một trong những thử thách cần phải vượt qua đó là "Cách in bảng cửu chương mà không dùng vòng lặp".

Hm, nghe hay nhỉ, không dùng vòng lặp thì sao mà lặp ...

### Multiplication Table up to ...

Trước đây, ta vẫn hay dùng vòng lặp để in bảng cửu chương kiểu như thế này:

```js
for (let i = 2; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

Kết quả thu được:
/**
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
*/
```

### Sau đây, ta thử sử dụng recursion (đệ quy) xem sao

```js
function multTableY(x, y)
{
  if (y != 1) {
    multTableY(x, y - 1);
  }
  console.log(`${x} * ${y} = ${x * y}`);
}

function multTable(x, y)
{
  if (x != 2){
    multTable(x - 1, y);
  }
  multTableY(x, y);
}

multTable(3, 5);

Kết quả thu được:
/**
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
*/
```