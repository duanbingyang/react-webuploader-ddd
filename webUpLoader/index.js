/***
    使用方法：

    import WebUploader from './Components/WebUploader.js';

    <WebUploader 
        uploaderConfig={{                               //webUploader配置，具体参见 http://fex.baidu.com/webuploader/doc/
            server: 'http://ohhitp3nx.bkt.clouddn.com/',    //上传服务器地址
            pick: {
                id: '#pick',								//图片上传组件唯一名称，页面如有多个上传必须设置不同名称
                multiple: false 							//单图上传！！！！！NND太费劲，原来插件写错了，累死了累死了！~！！！！！！！！！！！
            },              
            auto: true,                                     //选择图片后是否自动上传
                                                            //还有很多很多参数，可以看webuploader API
        }}  
        otherUploaderConfig={{                          //个人业务配置
            isSingleUpload: false,                          //是否为单图上传（如设置FALSE，则在选择过后不会隐藏上传按钮）
            defaultTips: {                                  //上传按钮中内容设置
                imgUrl: require('../../../images/webUpLoader/defaultBg1.png'),       //上传按钮的默认图片url,如果为空则没有图片标签
                title: '上传服务形象图',                       //上传按钮的title
                desc: '巴拉巴拉巴拉小魔仙',                    //上传按钮描述
            },
            beforeFileQueuedCallback: (file, status)=>{ //开始上传回调,file为要上传的问件，status为图片格式验证的状态
                console.log(file)
                console.log(percentage)
            },
            successCallback: (file,response)=>{				//上传成功回调，file为上传的文件信息，response为服务器返回内容
                console.log(file)
                console.log(response)
            },
            removeFileCallback: (index)=>{                  //删除成功回调，index为图片索引
                console.log(index)
            }
        }}
        styleConfig={{
            width: 400,                                     //上传图片宽度，高度为宽度的3/4,如需要更多尺寸，联系DBY
            whSale: 4/3                                     //上传图片宽高比
        }}                      
        otherStyleConfig={{                             //上传按钮样式
            width: '',                                        //按钮宽度
            height: '',                                       //按钮高度
            titleFontSize: '',                                //按钮内容中title字号
            descFontSize: '',                                 //按钮内容中描述字号
            imgWidth: '',                                     //按钮内容中图片宽度
            imgHeight: '',                                    //按钮内容中图片高度
            contentHeight: '',                                //按钮内容总高度，即图片+title+描述高度，主要用于按钮内容居中计算高度使用
        }}
        fileUrlList={[{                                 //预览/编辑功能，数组每一项为图片，其中preview为图片的地址
            preview: 'http://static.zbj.wanghongchengbao.cn/images/deleteIcon.45348fc3.png',
            suffix: 'zip'
        }]}
        imgFormatReg={/\d/}  								   //图片格式验证正则，仅在单图模式有效（即multiple为false时有效）
        uploadButtonJSX={                                   // 可选参数，用于自定义上传界面
            <div>
                <button className="upload-button">上传</button>
                <div id="pick"></div>
            </div>
        }
    />


    ------------------------------------------
   |                < 上传按钮 >               |
   |            ------------------            |
   |           |                  |           |
   |           |    上传按钮图片    |           |
   |           |                  |           |
   |            ------------------            |
   |               上传按钮title               | 
   |               上传按钮desc（描述）          |
   |                                          |
    ------------------------------------------

*/



const mid = 'pl_webUpLoader';
var node = document.getElementById(mid);
var ReactMap = CMD.ReactMap;

import WebUploader from './Components/WebUploader.js';
require('../../../sass/webUpLoader/index.css');
// class Card extends React.Component {
//     render(){
//         return (
//             <h1>1111</h1>
//         );
//     }
// }


class GoodsManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            selectedRowKeys: [],
        };
    }

   
    render() {
        return (
            <div>
                <WebUploader 
                    uploaderConfig={{
                        server: 'http://ohhitp3nx.bkt.clouddn.com/', 
                        pick: '#pick', 
                        auto: true, 
                        multiple: false
                    }}  
                    otherUploaderConfig={{
                        isSingleUpload: false,
                        defaultTips: {
                            imgUrl: '',
                            title: '上传服务形象图',
                            desc: '巴拉巴拉巴拉小魔仙',
                        },
                        hasUploadFile: [
                            {
                                id: 'xxxxx',
                                preview: 'http://static.zbj.wanghongchengbao.cn/images/deleteIcon.45348fc3.png'
                            }
                        ]
                    }}
                    styleConfig={{
                        width: 200,
                        whSale: 1                                     
                    }}
                    otherStyleConfig={{
                        width: '',
                        height: '',
                        titleFontSize: '',
                        descFontSize: '',
                        imgWidth: '',
                        imgHeight: '',
                        contentHeight: '',
                    }}
                />
            </div>
        );
    }
}
ReactMap.register(GoodsManager, mid);