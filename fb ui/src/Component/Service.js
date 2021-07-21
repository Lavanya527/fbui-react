import Uploadpost from './Uploadpost'
import Axios from 'axios'
import Post from './Post'
import { useState, useEffect } from 'react';
function Service() {
  const [postdata, setpostdata] = useState([]);
  const [postcomment, setcommdata] = useState([])
  useEffect(() => {
    const sendPostRequest = async () => {
      try {
        const resp = await Axios.get('http://localhost:5500/api/data');
        setpostdata(resp.data);
      } catch (err) {
          console.error(err);
      }
   };
    sendPostRequest();
  }, [postdata]);
 useEffect(() => {
    const sendcommRequest = async () => {
      try {
        const resp = await Axios.get('http://localhost:5500/api/cdata');
        setcommdata(resp.data);
      } catch (err) {
          console.error(err);
      }
   };
    sendcommRequest();
  }, [postcomment]);
  const sendPostData = async (post1) => {
    try {
      const resp = await Axios.post('http://localhost:5500/api/post',{msg1:post1});
     console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
  };
  const sendpostlike = async (id,postlike) => {
    try {
          let count = postlike + 1;
        const resp = await Axios.put('http://localhost:5500/api/data1/'+ id, {lcount:count});
      console.log("after like",resp.data);
    } catch (err) {
        console.error(err);
    }
  };
  const deletepostdata = async (id) => {
    try {
        const resp = await Axios.delete(`http://localhost:5500/api/data2/${id}`);
     // setpostdata(resp.data);
     console.log("after delete",resp.data);
      
    } catch (err) {
        console.error(err);
    }
  };
  const sendcommentdata = async (id, comment) => {
    try {
      //console.log("data is", id, comment);
      const resp = await Axios.post('http://localhost:5500/api/comm',{ id1:id,comment:comment });
      setcommdata(resp.data);
      
    } catch (err) {
        console.error(err);
    }
  };
  const deletecommdata = async (id) => {
    try {
        const resp = await Axios.delete(`http://localhost:5500/api/cdata/${id}`);
     // setpostdata(resp.data);
     console.log("after delete",resp.data);
      
    } catch (err) {
        console.error(err);
    }
  };
  return (
    <div className="App">
      <Uploadpost sub={sendPostData} />
      <Post postdata1={postdata} postlike={sendpostlike} deletepost1={deletepostdata} comm={sendcommentdata} postcomment1={postcomment} delete={deletecommdata} />
    </div>
  );
}
export default Service;
