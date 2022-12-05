import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">Đề tài</span> - Xây dựng website quản lý sinh viên theo dịch vụ serverless trên AWS.
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
