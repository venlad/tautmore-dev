import React from 'react';
import subscriptionList from '../../mockData/MySubscriptionList';
import MySubscriptionListCommon from './MySubscriptionListCommon';

const MySubscriptionList = () => (
    <div className="myexam-examlist">
        {subscriptionList.map((data) => (
            <div>
                {data?.data?.map((val) => (
                    <MySubscriptionListCommon val={val} key={val.key}  />
                ))}
            </div>
        ))}
    </div>
);

export default MySubscriptionList;
