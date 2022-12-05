import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-paw"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Nguyễn Quốc Huy</h4>
                            <p>Mã số sinh viên: 20110089</p>
                            <p><a href="/">Xem thêm</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-image has-text-centered">
                        <i className="fa fa-empire"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Hồ Duy Hoàng</h4>
                            <p>Mã số sinh viên: 20110487</p>
                            <p><a href="/">Xem thêm</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-apple"></i>
                    </div>
                     <div className="card-content">
                        <div className="content">
                            <h4>Đàm Vinh Quang</h4>
                            <p>Mã số sinh viên: 20110584</p>
                            <p><a href="/">Xem thêm</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
