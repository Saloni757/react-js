

import Card from './components/Card'

function App() {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "UI/UX Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "8 days ago",
      post: "Frontend Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Software Developer Intern",
      tag1: "Part Time",
      tag2: "Internship",
      pay: "$25/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "1 week ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "4 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "3 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "10 weeks ago",
      post: "Software Engineer - AI Tools",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Santa Clara, USA"
    }
  ];

  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem) {

        return <Card company={elem.companyName} posteddate={elem.datePosted} post={elem.post} tag1={elem.tag1} pay={elem.pay} tag2={elem.tag2} brandLogo={elem.brandLogo} loc={elem.location} />
      })}

    </div>

  )
}

export default App
