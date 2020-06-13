import React from 'react' 
import { HashRouter as Router,Link } from 'react-router-dom'

export default class Top extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicker: 0,
      };
      this.toplist = [
        { title: 'All', src: 'q=stars:%3E1&sort=stars&order=desc&type=Repositories' },
        { title: 'JavaScript', src: 'q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories' },
        { title: 'Ruby', src: 'q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories' },
        { title: 'Java', src: 'q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories' },
        { title: 'CSS', src: 'q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories' },
        { title: 'Python', src: 'q=stars:%3E1+language:python&sort=stars&order=desc&type=Repositories' },
      ];
    }

    componentDidMount() {
      if(sessionStorage.getItem("clicker")){
        const a=parseInt(sessionStorage.getItem("clicker"),10)
        this.setState({
          clicker:a
        });
      }
    }

    handleClick = (ev) => {
      // https://api.github.com/search/repositories?q=stars:
      this.props.getUrl(ev);
      // console.log(ev);
    }
  
    changeVul = (index) => {
      sessionStorage.setItem("clicker",index)
      const a=sessionStorage.getItem("clicker")
      console.log("aaa",a);
      
      this.setState({
        clicker:index,
      });
    }
  
    render() {
      return (
        <div className="top">
          <ul style={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'center' }}>
            <Router>
              {this.toplist.map((item, index) => <li key={index} className={`${index === this.state.clicker ? 'active1' : 'no'}`} style={{ fontSize: '25px', fontWeight: 'bold', margin: ' 40px 10px 25px 10px' }}><Link to={{pathname:`/popoular/${this.state.clicker}/${item.src}`}} onClick={() => { this.handleClick(item.src); this.changeVul(index); }}>{item.title}</Link></li>)}
            </Router>
          </ul>
        </div>
      );
    }
  }