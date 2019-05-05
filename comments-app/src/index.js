import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <p>{'Are you sure you want to quit'}</p>
                </div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author='Alex' timeAgo="Today at 6:00PM" comment="Nice Blog Post"
                    image={faker.image.avatar()} />
            </ApprovalCard >
            <ApprovalCard >
                <CommentDetail author='Jane' timeAgo="Today at 8:00PM" comment="Good Post"
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Sam' timeAgo="Yesterday at 1:00AM" comment="Can be a better Post"
                    image={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );

}
ReactDOM.render(<App />, document.querySelector('#root'));