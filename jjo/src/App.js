import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cover">
        <div className="cover-txt">
          <p className="title">Juniors make IT work.</p>
          <p className="subtxt">Hire and invest in highly skilled juniors now.</p>
          <button className="btn-cover">Post Offer Now</button>
        </div>
      </div>
      <div className="box-full">
       <div className="box1">
         <h1>Newest Job Offers</h1>
         <a href="#" className="job-link">View all job offers ➜</a>
       </div>
       <div className="box2">
         <div className="box2-a">
           <p className="box-heading">Junior Java Developer <span class="tab txt-color">2 hours ago</span></p>
           <p></p>
           <p>PickSaaS <span className="txt-color">Wrclaw, Polska</span></p>
           <p className="txt-color" >I am currently looking for a Java Developer. Project for Public Sector Location:
              Wrocław (during the pandemic remote work) $ up to PLN 550 net / MD B2B</p>
              <p className="greater"> &gt; </p>
         </div>
         <div className="box2-b">
         <p className="box-heading">Junior Project Manager <span class="tab txt-color">3 hours ago</span></p>
           <p></p>
           <p>Frontkom <span className="txt-color">Lublin, Polska</span></p>
           <p className="txt-color" >Join us in the Lublin office to build innovative long-term projects. 
           Exciting international clients and partners and a work environment focused on learning and growth awaits you!</p>
           <p className="greater"> &gt; </p>
         </div>
         <div className="box2-c">
         <p className="box-heading">Junior Project Manager <span class="tab txt-color">1 day ago</span></p>
           <p></p>
           <p>Frontkom <span className="txt-color">Lublin, Polska</span></p>
           <p className="txt-color" >I am currently looking for a Java Developer.
            Project for Public Sector Location: Wrocław (during the pandemic remote work) $ up to PLN 550 net / MD B2B</p>
            <p className="greater"> &gt; </p>
         </div>

       </div>
       </div>
       <div className="box3">
         <h1>Featured Companies</h1>
         <div className="icon">
         <div className="box3-1">
         <div className="fa">&#xf0b1;</div>
         <h4>GrandParade</h4>
        </div>  
        <div className="box3-1">
         <div className="fa">&#xf0b1;</div>
         <h4>Seargin</h4>
        </div> 
        <div className="box3-1">
         <div className="fa">&#xf0b1;</div>
         <h4>DEX Ventures</h4>
        </div> 
        <div className="box3-1">
         <div className="fa">&#xf0b1;</div>
         <h4>NBC</h4>
        </div> 
        <div className="box3-1">
         <div className="fa">&#xf0b1;</div>
         <h4>SVT SP Zoo</h4>
        </div> 
        <div className="box3-1">
         <div className="fa">&#xf0b1;</div>
         <h4>DG Tech</h4>
        </div> 
        <div className="box3-1">
         <div className="fa">&#xf0b1;</div>
         <h4>PickSaaS</h4>
        </div> 
        <div className="box3-1">
         <div className="fa">&#xf0b1;</div>
         <h4>BlackRose</h4>
        </div> 
        <div className="box3-1">
         <div className="fa">&#xf0b1;</div>
         <h4>FrontKom</h4>
        </div> 
         </div>
         
       </div>
      
    </div>
  );
}

export default App;
