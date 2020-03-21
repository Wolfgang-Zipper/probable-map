import React, {Component, useState} from 'react';
import video from '../../Images/grech.mp4'

const PreGrecha = (props) => {
const { props.error, props.isLoaded, props.items } = this.state;
if (error) {
  return <div>Ошибка: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Загрузка...</div>;
} else {

  return (

    <ul >
    <div className="pattern2">
    <h1 >Курс гречи</h1>
    <h1 className="overlay">{this.state.items.USD.Value * 0.89}</h1>
    </div>

    <video className="fullscreen-bg__video" loop="loop" autoplay="" muted="">
    <source src={video} type="video/mp4" />

    </video>

    </ul>
  );

//}

}
}

export default PreGrecha;
