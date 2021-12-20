import React from 'react';
import subscriptionList from '../../mockData/MySubscriptionList';
import MySubscriptionListCommon from './MySubscriptionListCommon';

const MySubscriptionList = () => (
    <div className="myexam-examlist">
        {subscriptionList.map((data) => (
            <div className="subscription-table">
                <table className="table table-hover responsive-table">
                    <tbody>
                        {data?.data?.map((val, index) => (
                            <MySubscriptionListCommon val={val} key={val.key} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        ))}
    </div>
);

export default MySubscriptionList;
