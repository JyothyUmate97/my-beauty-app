
import * as React from "react";
import blogImg1 from '../../images/page-0001.jpg';
import blogImg2 from '../../images/page-0002.jpg';
import blogImg3 from '../../images/page-0003.jpg';

const BlogOne: React.FC = () => (
    <div className="">
        {/* <span>Blog One images</span> */}
        <img src={blogImg1} style={{width: '100%'}}/>
        <img src={blogImg2} style={{width: '100%'}}/>
        <img src={blogImg3} style={{width: '100%'}}/>
        
    </div>
    
);

export default BlogOne;