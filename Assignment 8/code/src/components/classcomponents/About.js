import React from "react";
import AboutText from "./AboutText";
import Child from "./Child";

class About extends React.Component {
  constructor() {
    console.log("Parent constructor is called");
    super();
    this.state = {
      title: "Discover The Swiggster In You",
      post: {
        userId: 1,
        posttitle: "post title",
        postbody: "post body",
      },
      nums: [1, 2],
    };
  }

  clickHandler() {
    this.setState({
      title: "My Own Title",
    });
  }

  async componentDidMount() {
    console.log("Parent Component mounted sucessfully");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    // this.setState({
    //   ...this.state,
    //   post: {
    //     userId: data.userId,
    //     posttitle: data.title,
    //     postbody: data.body,
    //   },
    // });
    this.timer=setInterval(()=>{
      console.log("executing setInterval");
    },1000)
  }

  componentDidUpdate() {
    console.log("State updated");
  }

  componentWillUnmount() {
    console.log("Unmounted sucessfully");
    //!componentWillUnmount use case: cleanup
    clearInterval(this.timer)
  }

  render() {
    console.log("Parent render is called");
    const { title, post } = this.state;
    // console.log(`post object : {
    //     userId:${post?.userId},
    //     posttitle:${post?.posttitle},
    //     postbody:${post?.postbody}
    // }`);

    return (
      <>
        <div className="AboutPageHeader">
          <div className="aboutimgcontainer"></div>
          <AboutText title={title} />
        </div>
        <button
          className="btn btn-primary m-auto d-block my-2"
          style={{ width: "max-content" }}
          onClick={this.clickHandler.bind(this)}
        >
          Change Title
        </button>
        {this.state.nums.map((item) => (
          <Child key={item} title={item} />
        ))}
      </>
    );
  }
}

export default About;

/** 
* *Order of the execution in the normal component without any side effects and state updation
* *Mounting Phase
! *render phase(asynchronous)
1.constructor
2.render
! *commit phase(synchronous)
3.componentDidMount
*/

/*
* Updating phase
!Order of the execution
1.constructor is called
2.render is called
3.Component mounted sucessfully
!when you change the title state updated will be called
4.render is called
5.State updated
*/

/** *
 * ? The ComponentDidMount is used to execute the side effects like api calling,local storage data handling because it will execute just before the render so that application should not pause rendering untill the execution of side effects so In UI the user should see some components which will be visible for user engagement when the side effect execute complety the UI will render with new state
 */

/*
    *UnMounting phase
    *When the Component will go off from page it is known as unmounting phase to do some clenup there is lifecycle hook for unmounting phase that is componentWillUnmount
    *cleanup means clearing the setIntervals,setTimeouts,Intersection obersever

    *when we route to other page then it(componentWillUnmount) will call
    !when you click on the link it will log "Unmounted sucessfully"
*/

/*
 * when the react see the class child component then component life cyle begins i.e child constructor,render,componentDidMount then the Parent componentDidMout will execute
 * Order of the execution
 
1.Parent constructor
2.Parent render
3.Child constructor
4.Child render
5.Child ComponentDidMount
6.Parent ComponentDidMount
*/

/*
!When  we have array of childrens(Child Class Components) then the child life cycle methods behave slight different which will enhance the performance when we have Multiple Child Class Based Components then the render phase and commit phase execute batchwise 

*Order of the execution
 1   Parent constructor is called
 2.  Parent render is called
 !children render phase
 3.  1 constructor is called
 4.  1 render is called
 5.  2 constructor is called
 6.  2 render is called
 !children commit phase
 7.  1 componentDidMount is called
 8.  2 componentDidMount is called
 9.  Parent Component mounted sucessfully

 *As we noticed after the constructor and render methods it will not call componentDidMount phase immedieatly it will begin with other children render phase when the render phase of the all childrens completes it will batch the commit phase by executing componentDidMount of the childrens then the parent componentDidMount will execute.
*/

/*
! ComponentDidUpdate usecase: In functional components we run the side effects whenever the variables in the dependency array changes but how to do that thing in class Based components
*componentDidUpdate receive two parameters previousprops and previousstate if the currentstate is not equal to previous state then we execute some code.

!In functional components we can use multiple useEffects based on the different dependency variable
*In class based component we can't use multiple componentDidUpdate methods instead we use multiple if statements to execute block of code based on the variables
*/