import React, { Component } from 'react';
import regions from '../regions';
class Table extends Component {
  render() {
    const region = this.props.region;
    return (
        <table className="table">
          <thead>
            <tr>
              <th>Регион</th>
              <th>Кол-во пользователей в регионе</th>
              <th>Дата последнего добавления</th>
            </tr>
          </thead>
          <tbody>
            {region.map((r,key) => (
                <tr key={key}>
                    <td>{r.name}</td>
                    <td>{r.users}</td>
                    <td>{r.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
    );
  }
}

export default Table;
