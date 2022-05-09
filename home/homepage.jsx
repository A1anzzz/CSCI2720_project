import React from 'react';
import {Link} from 'react-router-dom';
import { BaseMap } from '../map/map';
import Sidebar from './sidebar';
import './home.css';
import axios from "axios";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tradeType: 's',
          itemList: [],
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    displayType = (status) => {
        if (status) {
          return this.setState({ tradeType: "s" });
        }
        return this.setState({ tradeType: "b" });
    };
    
    refreshList = () => {
        axios
          .get(" http://localhost:8000/post/items/")
          .then((res) => this.setState({ itemList: res.data }))
          .catch((err) => console.log(err));
      };

    renderItems = () => {
        const { tradeType } = this.state;
        const newItems = this.state.itemList.filter(
          (item) => item.tradeType === tradeType
        );
    
        return newItems.map((item) => (
        <div className="col-4 p-4">
            <div className="card">
                <Link to={"/PostShow"} state={{name: item.id}}>
                    <img src={item.image} alt="itemImage" className="w-100 p-3" />
                </Link>
                <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                    <p className="card-text text-secondary">{item.author}</p>
                </div>
            </div>
        </div>
        ));
    };

    render = () => {
        return (
    <div>
        {/*Sidebar*/}
        <div className="fixed-top">
                <div className="App" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    <div id="page-wrap">
                        <h1 id="title">Wheather App</h1>
                    </div>
                </div>
        </div>
        <div className="tbox">
            {/*Map*/}
            <div className="container">
            <div className="row text-center">
                <BaseMap />
            </div>
        </div>
    </div>
    </div>
 );
}
}

 export default Home;

