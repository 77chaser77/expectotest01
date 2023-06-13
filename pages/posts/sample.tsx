import React from 'react';

const MyPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', margin: '0 -10px' }}>
      <div style={{ backgroundColor: 'green', height: '100px', marginTop: '0', marginBottom: '0' }}></div>
      <div style={{ margin: '50px 0' }}>
        <h1>XX님의 아이폰 입니다.</h1>
        <div>
          <img src="/fake.png" alt="물품 이미지" width={300} height={300}/>
          <p>해당 물품의 이미지입니다.</p>
        </div>
        <div>
          <img src="/path/to/image2.jpg" alt="이미지 2" />
          <p>해당 물품의 qr코드 이미지입니다.</p>
        </div>
      </div>
      <div style={{ backgroundColor: 'green', height: '100px', marginTop: '0', marginBottom: '0' }}></div>
    </div>
  );
};

export default MyPage;
