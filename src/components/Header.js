const Header = (props)=>{



return <div className="headerContainer">
            <div className="flexHeader">
                <h1 id="roleHeader">My Next Role </h1> 
                <br></br>
                
                <input id="jobTitleInput" value={props.myNextRole} onChange={(e)=>props.handleRoleChange(e)}/> 
                <br></br>
                <button className="myRoleButton" onClick={()=>props.postMyRole(props.myNextRole)}>Save</button>
                <br></br>
                <br></br>
                
                </div>
                <h1 id="jobTitleDisplayed">{props.savedRole}</h1>

                    <div className='nav-btns'>
                        <button>
                            Profile
                        </button>
                        <button>
                            Logout
                        </button>
                        <button>
                            Goals
                        </button>

                    </div>
            <div>    
        </div>
    </div>

}

export default Header;