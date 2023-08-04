let hamNhap = []
for (let i = 0; i < 5; i++) {
    hamNhap[i] = +prompt("Nhập vào dãy số");
}
console.log("Hàm sau khi Nhập:", hamNhap);
let first = 0;
let last = 4;
let b = 0;
if (first < last) {
    b = hamNhap[first];
    hamNhap[first] = hamNhap[last];
    hamNhap[last] = b;
    
}
first++;
    last--;
console.log("Hàm sau khi Đảo:", hamNhap);