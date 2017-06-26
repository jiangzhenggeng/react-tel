/**
 * Created by jiangzg on 2017/5/10.
 */

import React,{Component} from 'react';

class Header extends Component{

    render(){
        return (
            <div className="new-header h85">
                <div className="header-warp main clear">
                    <div className="logo fl">
                        <h1><a href="/"><img src="http://cdn.jiguo.com/static/Pc/compression_2.9/style/images/header-logo@2x.png" /></a></h1>
                    </div>
                    <div className="new-search-warp ft0 mt25">
                        <div className="pos-rel">
                            <div className="search-box iblock  pos-rel">
                                <form action="/search/index.html" target="_blank" method="get">
                                    <input type="search" data-show-category-focus="" name="keyword" />
                                        <div className="search-btn pos-abs">
                                            <button type="submit">搜索</button>
                                        </div>
                                </form>
                            </div>
                            <div className="search-category">
                                <a href="javascript:;" data-show-category-click="" className="category-show-btn">全部分类</a>
                            </div>
                        </div>
                        <div className="hot-keywords ft12 gray" style={{display:'none'}}>
                            <a href="javascript:">无人机</a>
                            <a href="javascript:">机械臂</a>
                            <a href="javascript:">净化器</a>
                            <a href="javascript:">电动牙刷</a>
                            <a href="javascript:">老司机</a>
                            <a href="javascript:">iphone</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;