import React, {Component, useState} from 'react';
import video from '../../Images/grech.mp4'

class Grecha extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };


  }

  componentDidMount() {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.Valute
        });
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul >
        <div className="pattern2">
        <h1 className="overlay_h">Курс Гречи</h1>
        <h1 className="overlay">{(this.state.items.USD.Value * 0.89).toFixed(2)} ₽</h1>
        </div>

        <video className="fullscreen-bg__video" loop="loop" autoplay="" muted="">
        <source src={video} type="video/mp4" />

        </video>


        </ul>
      );
    }
  }
}
export default Grecha;
