import React, { Component } from 'react';
import Table from './Table';
import regions from '../regions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: (regions.length === 2) ? regions : localStorage.getItem('curRows') 
    };
  }
  addRegion = () => {
    const inputName = document.getElementById('name');
    const inputRegion = document.getElementById('region');
    const rows = this.state.rows;
    const now = new Date();
    const curDate = ('0' + now.getDate()).slice(-2) + '.' + ('0' + (now.getMonth() + 1)).slice(-2) + '.' + now.getFullYear();
    let newRow = {
      "name": inputName ? inputName.value : "",
      "users": inputRegion ? inputRegion.value : "",
      "date": curDate
    }
    rows.push(newRow);
    localStorage.setItem('curRows', JSON.stringify(rows));
    console.log(this.state.rows.length);
    return this.setState({rows: rows});
  };

  render() {
    return (
      <div className="App" style={{width: '980px',margin: "20px auto"}}>
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Имя</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="region">Регион</label>
              <input type="text" className="form-control" id="region" />
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-success" onClick={() => this.addRegion()}>Сохранить</button>
              <button type="button" className="btn btn-danger" onClick={clearStorage}>Сбросить</button>
            </div>
          </form>
          <Table region={(localStorage.getItem('curRows')) ? JSON.parse(localStorage.getItem('curRows')) : regions} />
       </div>
    );

  }
   
}
function clearStorage() {
  localStorage.clear();
  document.querySelector('.table tbody').innerHTML = "";
}


export default App;
