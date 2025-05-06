import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const roomData = [
  {
    id: 1,
    name: "豪華雙人房",
    image: "https://via.placeholder.com/400x300?text=豪華雙人房",
    description: "寬敞舒適的雙人房，附陽台與浴缸，適合情侶入住。",
    price: 3500,
    details: "免費早餐、WiFi、健身房、室內泳池",
  },
  {
    id: 2,
    name: "經濟單人房",
    image: "https://via.placeholder.com/400x300?text=經濟單人房",
    description: "適合商務旅客，簡約乾淨的住宿空間。",
    price: 1800,
    details: "免費WiFi、書桌、淋浴間",
  },
  {
    id: 3,
    name: "家庭套房",
    image: "https://via.placeholder.com/400x300?text=家庭套房",
    description: "兩房一廳設計，適合家庭旅遊入住。",
    price: 5200,
    details: "可住4人、小廚房、客廳、浴缸",
  },
  {
    id: 4,
    name: "總統套房",
    image: "https://via.placeholder.com/400x300?text=總統套房",
    description: "極致奢華體驗，專屬管家服務。",
    price: 12800,
    details: "超大空間、按摩浴缸、酒櫃、VIP服務",
  },
  {
    id: 5,
    name: "和風房",
    image: "https://via.placeholder.com/400x300?text=和風房",
    description: "日式風格榻榻米客房，體驗和式住宿。",
    price: 4200,
    details: "日式早餐、浴衣、泡湯設施",
  },
  {
    id: 6,
    name: "海景雙人房",
    image: "https://via.placeholder.com/400x300?text=海景雙人房",
    description: "面海景觀，坐擁美麗日出與海風。",
    price: 4800,
    details: "陽台海景、雙人浴缸、早餐",
  },
];


const RoomCard = ({ room, discount }) => {
  const [expanded, setExpanded] = useState(false);
  const finalPrice = Math.round(room.price * (1 - discount / 100));

  return (
    <div
      className="card h-100 shadow-sm"
      onClick={() => setExpanded(!expanded)}
      style={{ cursor: "pointer" }}
    >
      <img src={room.image} className="card-img-top" alt={room.name} />
      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-text">{room.description}</p>
        <p className="text-danger fw-bold">
          原價：${room.price} / 每晚
          <br />
          優惠價：${finalPrice} / 每晚
        </p>
        {expanded && <p className="text-muted small">{room.details}</p>}
      </div>
    </div>
  );
};

const App = () => {
  const [discount, setDiscount] = useState(0); // 目前折扣
  const [tempDiscount, setTempDiscount] = useState(0); // 暫存輸入值

  const handleConfirm = () => {
    if (tempDiscount >= 0 && tempDiscount <= 100) {
      setDiscount(tempDiscount);
    } else {
      alert("請輸入 0 到 100 之間的數字！");
    }
  };

  return (
    <div>
      {/* 導覽列 */}
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">飯店房型介紹</span>
        </div>
      </nav>

      {/* 折扣輸入區塊 */}
      <div className="container mb-4">
        <label htmlFor="discountInput" className="form-label fw-bold">
          請輸入目前促銷折扣（例如輸入 20 表示 8 折）：
        </label>
        <div className="input-group">
          <input
            type="number"
            id="discountInput"
            className="form-control"
            min="0"
            max="100"
            value={tempDiscount}
            onChange={(e) => setTempDiscount(Number(e.target.value))}
          />
          <button className="btn btn-success" onClick={handleConfirm}>
            確定
          </button>
        </div>
        <p className="text-muted mt-1">目前折扣：{discount}%</p>
      </div>

      {/* 房型卡片列表 */}
      <div className="container">
        <div className="row g-4">
          {roomData.map((room) => (
            <div className="col-12 col-md-6 col-lg-4" key={room.id}>
              <RoomCard room={room} discount={discount} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
