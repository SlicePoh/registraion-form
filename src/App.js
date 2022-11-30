    import React,{useState, useEffect} from 'react'
    import Navbar from './components/Navbar';
    import './App.css';
    import { View } from './components/View';
    import { FcDown } from "react-icons/fc";
    
    
    // getting the values of local storage
    const getDatafromLS=()=>{
      const data = localStorage.getItem('books');
      if(data){
        return JSON.parse(data);
      }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [site, setSite]=useState('');
  const [image, setImage]=useState('');
  const [gender, setGender]=useState('');
  const [skill1, setSkill1]=useState('');
  const [skill2, setSkill2]=useState('');
  const [skill3, setSkill3]=useState('');

  // form submit event
  const handleAdd=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      name,
      email,
      site,
      image,
      gender,
      skill1,
      skill2,
      skill3
    }
    setbooks([...books,book]);
    setName('');
    setEmail('');
    setSite('');
    setImage('');
    setGender('');
    setSkill1('');
    setSkill2('');
    setSkill3('');
  }

  // delete book from LS
  const deleteBook=(name)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.name !== name
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <Navbar/>
      <div className="flex">

        <div className=' w-1/2 bg-slate-200 h-screen form-container p-4'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAdd}>
            <label className="form-label">Full Name:-</label>
            <input type="text" placeholder="John Doe" className='form-control mx-8' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label className="form-label">Email:-</label>
            <input type="email" placeholder="abc@gmail.com" className='form-control mx-20' required
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>
            <label className="form-label">Website:-</label>
            <input type="url" placeholder="paste site link here" className='form-control mx-14' required
            onChange={(e)=>setSite(e.target.value)} value={site}></input>
            <br></br>
            <label className="form-label" >Image Link:-</label>
            <input type="url" placeholder="paste image link here" className="form-control mx-8 " required
            onChange={(e)=>setImage(e.target.value)} value={image}></input>
            <br />
            <label className="form-label">Gender:-</label>
            <label className="form-label ml-12 mr-4">Male</label>
            <input type="radio" name='gender'
            onChange={(e)=>setGender(e.target.value)} value="Male" />
            <label className="form-label mx-4">Female</label>
            <input type="radio" name='gender'
            onChange={(e)=>setGender(e.target.value)} value="Female" />
            <br />
            <label className="form-label">Skills:-</label>
            <label className="form-label ml-10 mr-2">JAVA</label>
            <input type="checkbox" name='skills'
            onChange={(e)=>setSkill1(e.target.value)} value="JAVA" />
            <label className="form-label mx-2">HTML</label>
            <input type="checkbox" name='skills'
            onChange={(e)=>setSkill2(e.target.value)} value="HTML" />
            <label className="form-label mx-2">CSS</label>
            <input type="checkbox" name='skills'
            onChange={(e)=>setSkill3(e.target.value)} value="CSS" />
            <br/>
            <button type="submit" className="btn bg-[#1eff00] ">
              Enroll Student
            </button>
            <button type="reset" className="btn bg-[#ff3300]">Clear</button>
          </form>
        </div>

        <div className="flex flex-col p-4 w-1/2 bg-black view-container">
          <p className=" text-xl font-bold text-[#1eff00] mx-auto">Enrolled Students</p>
          <FcDown className=" mx-auto bg-[#ecf101] text-3xl "></FcDown>
          {books.length>0&&<>
            <div className='table-responsive'>  
              <View books={books} deleteBook={deleteBook}/>
            </div>
            <button className='btn text-[#1eff00] w-1/2 '
            onClick={()=>setbooks([])}>Remove All</button>
          </>}

          {books.length < 1 && <div className="text-3xl mx-auto text-lime-500 my-40 ">No data added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
