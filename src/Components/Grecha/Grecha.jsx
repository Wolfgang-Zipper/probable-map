import React, {Component} from 'react';

class Grecha extends React.Component {

constructor(props){
  super(props);
  this.state = {
    items: [],
    isLoaded:false
  }
}

  gettingUSD() {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(res => res.json())

        .then(json => {
            this.setState({
              isLoaded:true,
              itdems: json,
            })

        });
debugger;


  }

  render() {
    debugger;
    var {isLoaded, items} = this.state;
    if (!isLoaded) {

      return <div>Loading...</div>
    }
    else {
      return (

          <div>
            Data has been loaded
          </div>

      );
    }
  }
}
export default Grecha;
