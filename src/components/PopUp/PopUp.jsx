// import React from 'react';
// import * as ReactDOM from 'react-dom';

// class Popup extends React.Component {
//     constructor(props) {
//         super(props);
//         this.close = this.close.bind(this);
//     }

//     close() {
//         this.props.onClose();
//     }

//     render() {
//         const {head, body} = this.props;
//         return (
//             <div className="popup">
//                 <div className="black-section" onClick={this.close}></div>
//                 <div className="content-section-wrapper">
//                     <a href="javascript:;" className="close-button aligner adaptLink" onClick={this.close}>X</a>
//                     <div className="content-section">
//                         <div className="head-block">
//                             {head}
//                         </div>
//                         <div className="body-block">
//                             <div className="body-block-inner">
//                                 {body}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }


// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visiblePopup: true,
//         }

//         this.openPopup = this.openPopup.bind(this);
//         this.closePopup = this.closePopup.bind(this);
//     }

//     openPopup() {
//         this.setState({
//             visiblePopup: true
//         });
//     }

//     closePopup() {
//         this.setState({
//             visiblePopup: false
//         });
//     }

//     render() {
//         const {visiblePopup} = this.state;
//         let popupTitle = <h2>React Popup</h2>;
//         let popupBody = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae  aut doloremque temporibus repudiandae odit aliquam aperiam, repellat saepe minus magni rem tempora. Maxime animi nesciunt sit!</p>;
//         return (
//             <div>
//                 <p style={{textAlign : 'center'}}>
//                   <a href="javascript:;" onClick={this.openPopup} style={{textDecoration:'none', color:'#000', border:'1px solid', borderRadius:'5px', padding:'8px'}} >Open Pop-Up</a>
//                 </p>
//                 {visiblePopup ? <Popup head={popupTitle} body={popupBody} onClose={this.closePopup} /> : ""}
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <List/>,
//     document.getElementById("app")
// );