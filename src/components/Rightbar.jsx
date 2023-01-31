import "./rightbar.scss";

const Rightbar = () => {
  
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className='item'>
          <span>Suggesions for you</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
                alt=''
              />
              <span>tom harry</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
                alt=''
              />
              <span>tom harry</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
                alt=''
              />
              <p>
                <span>tom harry</span> changed pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
                alt=''
              />
              <p>
                <span>tom harry</span> changed pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
                alt=''
              />
              <p>
                <span>tom harry</span> changed pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='item'>
          <span>Online friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
                alt=''
              />
              <div className="online"/>
              <span>tom harry</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
                alt=''
              />
               <div className="online"/>
              <span>tom harry</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img
                src='https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
                alt=''
              />
               <div className="online"/>
              <span>tom harry</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
