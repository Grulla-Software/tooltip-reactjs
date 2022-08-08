import * as React from 'react';
import './index.css';
interface Props {
  text?:  JSX.Element,
  type?: string,
  offsetX?: string,
  offsetY?: string,
  width?: string,
  height?: string,
  background?: string,
  fontSize?: string,
  color?: string,
  borderRadius?: string,
  children?: JSX.Element

}
class TooltipsReactjs extends React.Component<Props> {
  render() {
    const { text,type,width,height,background,fontSize,color,borderRadius,offsetX,offsetY,children } = this.props;
    return(
      !type?(
        <div className={`tooltip ${type?type:'top'}`} >
          <span className="tiptext" style={{
              width: width?width:'150px',
              height: height?height:'30px',
              backgroundColor: background?background:'#0000005b',
              fontSize: fontSize?fontSize:'1rem',
              bottom:  offsetY?offsetY+'%':'80%',
              left:  offsetX?offsetX+'%':'0%',
              color: color?color:'#fff',
              borderRadius: borderRadius?borderRadius:'3px'
            }}
          >
            <span className="arrow" style={{ 
                borderColor: background?background+' transparent transparent transparent':"#2E2E2E transparent transparent transparent",
                marginLeft: '-5px',
                top: '100%',
                left: '50%'
            }}
            ></span>
            {text}
          </span>

          {children}
        </div>
      ):(
        type === 'top'?(
          <div className={`tooltip ${type}`}>
            <span className="tiptext" style={{
                width: width?width:'150px',
                height: height?height:'30px',
                backgroundColor: background?background:'#0000005b',
                fontSize: fontSize?fontSize:'1rem',
                bottom:  offsetY?offsetY+'%':'80%',
                left:  offsetX?offsetX+'%':'0%',
                color: color?color:'#fff',
                borderRadius: borderRadius?borderRadius:'3px'
              }}
            >
              <span className="arrow" style={{ 
                borderColor: background?background+' transparent transparent transparent':"#2E2E2E transparent transparent transparent",
                marginLeft: '-5px',
                top: '100%',
                left: '50%'
              }}
              ></span>
              {text}
            </span>
            {children}
          </div>
        ):type === 'bottom'?(
          <div className={`tooltip ${type}`}>
            <span className="tiptext" style={{
                width: width?width:'150px',
                height: height?height:'30px',
                backgroundColor: background?background:'#0000005b',
                fontSize: fontSize?fontSize:'1rem',
                top:  offsetY?offsetY+'%':'80%',
                left:  offsetX?offsetX+'%':'0%',
                color: color?color:'#fff',
                borderRadius: borderRadius?borderRadius:'3px'
              }}
            >
              <span className="arrow" style={{ 
                borderColor: background?'transparent transparent '+background+ ' transparent':" transparent transparent #2E2E2E transparent",
                marginLeft: '-5px',
                bottom: '100%',
                left: '50%'
              }}
              ></span>
              {text}
            </span>
            {children}
          </div>
        ):type === 'left'?(
          <div className={`tooltip ${type}`}>
            <span className="tiptext" style={{
                width: width?width:'150px',
                height: height?height:'30px',
                backgroundColor: background?background:'#0000005b',
                fontSize: fontSize?fontSize:'1rem',
                marginTop:  offsetY?offsetY+'%':'20%',
                right:  offsetX?offsetX+'%':'110%',
                color: color?color:'#fff',
                borderRadius: borderRadius?borderRadius:'3px'
              }}
            >
              <span className="arrow" style={{ 
                borderColor: background?'transparent transparent  transparent '+background:" transparent transparent transparent #2E2E2E",
                marginTop: '-5px',
                top: '50%',
                left: '100%'
              }}
              ></span>
              {text}
            </span>
            {children}
          </div>
        ):type === 'right'?(
          <div className={`tooltip ${type}`}>
            <span className="tiptext" style={{
                width: width?width:'150px',
                height: height?height:'30px',
                backgroundColor: background?background:'#0000005b',
                fontSize: fontSize?fontSize:'1rem',
                marginTop:  offsetY?offsetY+'%':'20%',
                left:  offsetX?offsetX+'%':'110%',
                color: color?color:'#fff',
                borderRadius: borderRadius?borderRadius:'3px'
              }}
            >
              <span className="arrow" style={{ 
                borderColor: background?'transparent '+background+' transparent  transparent':" transparent #2E2E2E transparent transparent ",
                marginTop: '-5px',
                top: '50%',
                right: '100%'
              }}
              ></span>
              {text}
            </span>
            {children}
          </div>
        ):(
          <div className={`tooltip top`}>
            <span className="tiptext" style={{
                width: width?width:'150px',
                height: height?height:'30px',
                backgroundColor: background?background:'#0000005b',
                fontSize: fontSize?fontSize:'1rem',
                bottom:  offsetY?offsetY+'%':'80%',
                left:  offsetX?offsetX+'%':'0%',
                color: color?color:'#fff',
                borderRadius: borderRadius?borderRadius:'3px'
              }}
            >
              <span className="arrow" style={{ 
                borderColor: background?background+' transparent transparent transparent':"#2E2E2E transparent transparent transparent",
                marginLeft: '-5px',
                top: '100%',
                left: '50%'
              }}
              ></span>
              {text}
            </span>
            {children}
          </div>
        )
      )
    );
  }
}
export default TooltipsReactjs;