
/*** 
  
	import ImgBox from './../../../modules/indexLogin/content/imgCard.js'		//暂时放在业务目录里，内测中~

	图片组件  按照所定区域自动填满，不拉伸

	<ImgBox 
		width = {400}															//图片宽度,如果需要自适应宽度则不传
		imgScale = {1.3333333}													//图片宽高比，宽/高
		imgUrl = {require('./../../../../images/index/wxPromoteImg.jpg')}		//图片地址
		bottomDesc = '¥&nbsp;1000-3000'											//图片描述，不传则不显示
	/>

*/

const { Input, Button } = window.antd;


export default class ImgArea extends React.Component {

	
	constructor(props){
		super(props);
		this.state = {
			isWideImg: false,
			visibility: false,
			imgBoxDomHeight: 0,
			imgTop: 0,
			imgLeft: 0
		}
		this.imgBoxDomWidth = 0;
		this.imgBoxDomHeight = 0;
		this.imgResizeFn = this.imgResizeFn.bind(this);
		this.bottomDescFn = this.bottomDescFn.bind(this);
	}
	
	componentDidMount() {
		let imgBoxDom = this.refs.imgBoxDom;
		let imgBoxDomWidth = this.refs.imgBoxDom.offsetWidth;
		this.imgBoxDomWidth = imgBoxDomWidth;
		this.imgBoxDomHeight = imgBoxDomWidth / this.props.imgScale;
		this.setState({
			imgBoxDomHeight: imgBoxDomWidth / this.props.imgScale
		})
	}
	

	imgResizeFn(){
		var that = this;
		let imgDom = that.refs.imgDom;
		let imgDomWidth = imgDom.offsetWidth;
		let imgDomHeight = imgDom.offsetHeight;
		if(imgDomWidth/imgDomHeight > that.props.imgScale){
			that.setState({
				isWideImg: true,
				visibility: true,
				imgTop: 0,
				imgLeft: (this.imgBoxDomWidth - imgDomWidth)/2
			})
		}else{
			that.setState({
				isWideImg: false,
				visibility: true,
				imgTop: (this.imgBoxDomHeight - imgDomHeight)/2,
				imgLeft: 0
			})
		}
	}

	bottomDescFn(){
		if(this.props.bottomDesc && this.props.bottomDesc != null){
			return (
				<div 
					style={{
						position: 'absolute',
						left: 0,
						bottom: 0,
						backgroundColor: 'rgba(0,0,0,0.4)',
						color: '#FFF',
						fontSize: 24,
						paddingTop: 10,
						paddingRight: 16,
						paddingBottom: 10,
						paddingLeft: 16,
						width: '100%',
						lineHeight: '24px',	
						fontWeight: 200,
						height: 44,	
					}}
				>{this.props.bottomDesc}</div>
			)
		}else{
			return null;
		}
	}
	render(){
		return (
			<div 
			style={{
				width: this.props.width || '100%',
				height: this.props.height ? this.props.height : this.props.width ? this.props.width/this.props.imgScale : this.state.imgBoxDomHeight,
				overflow: 'hidden',
				position: 'relative',
				borderRadius: this.props.borderRadius || '6px',
			}}
			className='imgBox'
			ref='imgBoxDom'
			>
				 <img 
					style={{
						width: this.state.isWideImg ? 'auto' : '100%',
						height: this.state.isWideImg ? '100%' : 'auto',
						visibility: this.state.visibility ? 'visible' : 'hidden',
						position: 'absolute',
						top: !this.state.imgTop ? 0 : this.state.imgTop,
						left: !this.state.imgLeft ? 0 : this.state.imgLeft
					}}
					onLoad={this.imgResizeFn}
					src={this.props.imgUrl}
					ref='imgDom'
				/>
				{this.bottomDescFn()}
			</div>
		);
	}

};
