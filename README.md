# Điện toán đám mây - Lớp 03CLC - Nhóm 10

### Tên đề tài
### Xây dựng ứng dụng quản lý thông tin sinh viên sử dụng dịch vụ serverless của AWS

### Thành viên nhóm
- Đàm Vinh Quang - 20110548
- Nguyễn Quốc Huy - 20110089
- Hồ Duy Hoàng - 20110487

### Chức năng chính của đề tài: Quản lý thông tin sinh viên như
- Thêm mới 1 sinh viên vào databse của DynamoDB
- Cập nhật sinh viên đã có trong database
- Xuất danh sách sinh viên trong database
- Xóa 1 sinh viên đã có trong database

### Công nghệ và ngôn ngữ
- Front-end: HTML, Css, Bootstrap, JS, Reactjs
- Back-end: Nodejs
- Dịch vụ: DynamoDB, AWS Lambda, API Gateway

## Hướng dẫn cài đặt

### Bước 1: Cài đặt sẵn phần mềm GitBash
### Bước 2: Tạo databse sử dụng dịch vụ DynamoDB
- Truy cập vào dịch vụ DynamoDB của AWS Console 
- Tạo một table như sau Name: "SinhVien", Partition key: "mssv" & sau đó nhấn Create table
 
<img src="https://user-images.githubusercontent.com/113046454/205694331-cdce6396-6490-4f72-aa31-1273f18ddf9b.png" alt="..." width="800" />

- Sau khi Table tạo xong, nhấn vào table -> chọn "Explore table items"
- Create item -> Add new atrribute, sau đó tạo các dòng ví dụ như sau, sau đó Create item (Lưu ý các Atrributes phải đặt đúng tên)
 
<img src="https://user-images.githubusercontent.com/113046454/205696018-6700183e-906a-4768-9172-28af7ce2f897.png" alt="..." width="800" />

- Sau khi tạo thành công các items sẽ như thế này
 
<img src="https://user-images.githubusercontent.com/113046454/205696381-2a5498c6-edcd-4ac8-944d-7c79cab65246.png" alt="..." width="800" />

### Bước 3: Tạo các Function sử dụng dịch AWS Lambda
- Truy cập vào dịch vụ AWS Lambda của AWS Console và tạo 4 function trong folder Lambda của Project
- Nhấn Create Function
- Ví dụ tạo Function: sinhvienGet để xuất thông tin sinh viên có trong database

<img src="https://user-images.githubusercontent.com/113046454/205697954-7e8e6f54-384a-4c20-a875-ecd6f62ac2bb.png" alt="..." width="800" />

#### Lưu ý: Nên chọn phiên bản Nodejs cũ nhất để thích hợp với Syntax code

- Change default execution role: dùng các quyền có sẵn

<img src="https://user-images.githubusercontent.com/113046454/205698464-b4c8a796-7432-4e8f-8eaa-359b40fb90f4.png" alt="..." width="800" />

- Create function
- Paste code sinhvienGet.js trong folder Lambda vào phần này & sau đó bấm Test và tạo một event có tên bất kỳ (không quan trọng) sau đó nhấn Save

<img src="https://user-images.githubusercontent.com/113046454/205699230-e9c23566-407e-4b0e-8f0d-89d450321ae7.png" alt="..." width="800" />

- Các Function còn lại làm tương tự

### Bước 4: Tạo các API Gateway & cấu hình cho đồ án
- #### `git clone https://github.com/NguyenQuocHuy2k2/ProjectDientoandammay`

Link youtube hướng dẫn tạo các API Gateway và cấu hình cho đồ án: https://youtu.be/fVNlcqoPM7Y 

### Bước 5: Mở GitBash tại Desktop và tiến hành chạy
- Sau khi git, tại Desktop sẽ xuất hiện Folder ProjectDientoandammay
- #### `cd ProjectDientoandammay`
- #### `npm i`
- #### `npm start`

### Bước 6: Deploy trên aws bằng ec2

- Bước 6.1: Mở EC2 và tạo launch Instances

--> Chọn ubntu server 20.04

<img src="https://user-images.githubusercontent.com/113155221/207244638-f56ad7d8-3907-451e-9ac1-091c4c22f3b5.png" alt="..." width="800" />

--> Tiến hành tạo 1 key mới, tạo thư mục deployaws và lưu file vào một thư mục đó

<img src="https://user-images.githubusercontent.com/113155221/207245306-4ef9ce5c-b5c3-4a14-8e41-e8b28b26a78d.png" alt="..." width="800" />

--> Launch instance

- Bước 6.2: 

--> Chọn name: deployQLSinhVien -> chọn security-> chọn sg-05e994b43aafeb8f4

<img src="https://user-images.githubusercontent.com/113155221/207250727-ccfb7795-77c0-4c67-a67f-abed719f7334.png" alt="..." width="800" />

--> Chọn Edit inbound rules để thêm rule

<img src="https://user-images.githubusercontent.com/113155221/207250756-d151ac48-b7bf-4c0a-ba4b-08ff950188df.png" alt="..." width="800" />

--> Tạo thêm 3 rule

https		     443	  Anywhere-IPv4

http		      80	   Anywhere-IPv4

custom TCP 	3000 	Anywhere-IPv4

<img src="https://user-images.githubusercontent.com/113155221/207250807-e7f22643-792a-452e-b56a-563a58ada1eb.png" alt="..." width="800" />

--> save rules để lưu

- Bước 6.3: 

--> Instances / deployQLSinhVien / Connect

<img src="https://user-images.githubusercontent.com/113155221/207250847-ca735e4f-3f55-4ebd-8dec-3dbb8fc64efd.png" alt="..." width="800" />

--> Tiếp theo ta vô thư mục deployaws có chứa file key vừa nãy tạo bật gitbash gõ các lệnh

+ `chmod 400 DeployQLSV.pem`

+ `ssh -i "DeployQLSV.pem" ubuntu@ec2-34-201-127-118.compute-1.amazonaws.com` và gõ yes

<img src="https://user-images.githubusercontent.com/113155221/207250932-2cb901ec-49c2-4205-bcf6-0d1d1f96b49a.png" alt="..." width="800" />

--> Sau đó ta gõ các lệnh theo thứ tự

+ `sudo apt install curl`

+ `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`

+ `source ~/.bashrc`

+ `nvm install 14.21.1`

+ `nvm use 14.21.1`

+ `git clone https://github.com/NguyenQuocHuy2k2/ProjectDientoandammay.git`

+ `cd ProjectDientoandammay`

+ `npm install`

+ `npm install react-scripts --save`

+ `npm install`

+ `npm start`

+ sau khi chạy xong ta copy Public IPv4 address có dạng (ví dụ): 34.201.127.118 với port 3000

=> đường dẫn là http://34.201.127.118:3000/

<img src="https://user-images.githubusercontent.com/113155221/207253174-baee5aeb-31a1-4c26-b09d-60a1593a9e8a.png" alt="..." width="800" />


## Cảm ơn thầy và các bạn đã theo dõi, chúc các bạn thành công
