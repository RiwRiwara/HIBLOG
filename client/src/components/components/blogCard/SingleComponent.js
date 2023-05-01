import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
const SingleComponent = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState("");
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/blogs/${slug}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [slug]);

  const updateBlog = () => {
    setEditMode(!editMode);
  };

  const saveBlog = () => {
    axios
    .put(`${process.env.REACT_APP_API}/blogs/${slug}`, {title: blog.title, content: blog.content, author: blog.author})
    .then(res=>{
      Swal.fire("Update!", "Data has updated","success")
    }).catch(err=>{
      console.log(err)
      Swal.fire("Unsuccess!", "Data not updated","error")
    })
    setEditMode(!editMode);
  };
  const goBackPage = () => navigate('/blogs');

  const confirmDelete=(blog)=>{
    Swal.fire({
      title:`Are you sure to delete ${blog.title}`,
      icon:"warning",
      showCancelButton :true
    }).then((res)=>{
      if (res.isConfirmed){
        deleteBlog(blog.slug)
        goBackPage()
      }
    })
  }

  const deleteBlog=(slug)=>{
    axios.delete(`${process.env.REACT_APP_API}/blogs/${slug}`)
    .then(res=>{
      Swal.fire("Deleted!", res.data.message,"success")
    })
  }


  
  return (
    <div className="container p-3">
      <div className="text-end">
        <div class="dropdown open mb-3 ">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Action
          </button>
          <div class="dropdown-menu" aria-labelledby="triggerId">
            <button class="dropdown-item" onClick={()=>updateBlog()}>Update</button>
            <button class="dropdown-item" onClick={()=>confirmDelete(blog)}>Delete</button>
          </div>
        </div>
      </div>

      <div className="card container">
        <div className="card-body">
          {editMode ? (
            <input
              className="form-control mb-3"
              defaultValue={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            />
          ) : (
            <h2 className="card-title">{blog.title}</h2>
          )}
          {editMode ? (
            <input
              className="form-control mb-3"
              defaultValue={blog.author}
              onChange={(e) => setBlog({ ...blog, author: e.target.value })}
            />
          ) : (
            <h4 className="card-subtitle mb-2 text-muted">{blog.author}</h4>
          )}
          {editMode ? (
            <textarea
              className="form-control"
              defaultValue={blog.content}
              onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            />
          ) : (
            <p className="card-text">{blog.content}</p>
          )}
          {editMode && (
            <button className="btn btn-primary mt-3" onClick={saveBlog}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleComponent;
