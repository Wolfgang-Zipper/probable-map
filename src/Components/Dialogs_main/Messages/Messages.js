import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message.js';
import {BrowserRouter, Route} from 'react-router-dom';

const Messages = (props) => {

    let messages = props.messagesData.map(mess => <Message id={mess.id} date_massege={mess.date_massege}
                                                           name={mess.name} text_massage={mess.text_massage}/>);
    let NewTextElement = React.createRef();
    let addPost = () => {
      props.dispatch({type:'addnewMess'}); //вызов функции, проброшенной через props из "BLL" (добавляет данные сообщения в "state" взятые из того же "state",
                          //которые были добавлены туди из функции передачи ввода "onCgangeMess")
    };

    let onChangeMess = () => {
      let text = NewTextElement.current.value;
      props.dispatch({type:'changeMessText', textMessage:text});//помещает из поля ввода input значения,
    }
    return (
        <BrowserRouter>
            <div сlassName={s.create_post}>


                <div className="input-group mb-3">
                    <input ref={NewTextElement} onChange={onChangeMess} value={props.newMessText}  type="text" className="form-control" />
                        <div className="input-group-append">
                          <button onClick={addPost}  className="btn btn-outline-secondary" type="button" id="button-addon2">Button
                          </button>
                        </div>
                </div>
            </div>
            <div className={s.post}>
                {messages}
            </div>
        </BrowserRouter>
)
}
export default Messages;
