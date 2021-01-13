import React from 'react';

const ChildrenComponent = ({ children }) => (
  <div className="border">
    {children}
  </div>
);

const ChildrenComponent2 = ({ children }) => (
  <div className="border">
    {children('可以傳值給 Children')}
  </div>
);

const ChildrenComponent3 = ({ render }) => (
  <div className="border">
    {render('可以傳值給 Children')}
  </div>
);

export default function Example8() {
  return (
    <div className="example">
      <ChildrenComponent>
        <img src="https://fakeimg.pl/250x100/" alt="" />
      </ChildrenComponent>
      <hr />
      <ChildrenComponent2>
        {(value) => <h3>{value}</h3>}
      </ChildrenComponent2>
      <hr />
      <ChildrenComponent3
        render={(value) => <h3>{value}</h3>}
      />
    </div>
  );
}
