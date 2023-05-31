const dummyProgram = [
  {
    id: 1,
    title: "The Joy of Food",
    update: "4/18/2023",
    url: "https://picsum.photos/300?text=1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, feugiat et orci id, iaculis cursus turpis. Ut dapibus, enim vel feugiat commodo, tortor.",
    event: []
  },
  {
    id: 2,
    title: "Healthcare Program",
    update: "4/18/2023",
    url: "https://picsum.photos/300?text=2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, feugiat et orci id, iaculis cursus turpis. Ut dapibus, enim vel feugiat commodo, tortor.",
    event: []
  },
  {
    id: 3,
    title: "Elderly Education (Language) Program",
    update: "1/2/2023",
    url: "https://picsum.photos/300?text=3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, feugiat et orci id, iaculis cursus turpis. Ut dapibus, enim vel feugiat commodo, tortor.",
    event: []
  },
  {
    id: 4,
    title: "Disabilities Training Program",
    update: "10/29/2022",
    url: "https://picsum.photos/300?text=4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis pretium mollis. Aliquam sit amet metus sapien. Vestibulum vulputate leo ante, vel tincidunt leo porta quis. Etiam tellus nisl, tincidunt sit amet leo ut, rutrum pharetra felis. Aenean consequat accumsan.",
    event: []
  },
  {
    id: 5,
    title: "Agricultural Program",
    update: "10/28/2022",
    url: "https://picsum.photos/300?text=5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, feugiat et orci id, iaculis cursus turpis. Ut dapibus, enim vel feugiat commodo, tortor.",
    event: []
  },
  {
    id: 6,
    title: "Environment Cleaning Program",
    update: "10/16/2022",
    url: "https://picsum.photos/300?text=6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, feugiat et orci id, iaculis cursus turpis. Ut dapibus, enim vel feugiat commodo, tortor.",
    event: []
  },
  {
    id: 7,
    title: "Homecare Program",
    update: "9/22/2022",
    url: "https://picsum.photos/300?text=7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et varius eros, ut consectetur leo. Proin non urna sodales, laoreet ipsum eget, imperdiet nisi. In magna arcu, dapibus eu lectus.",
    event: []
  },
  {
    id: 8,
    title: "Medical Provide Program",
    update: "9/8/2022",
    url: "https://picsum.photos/300?text=8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, feugiat et orci id, iaculis cursus turpis. Ut dapibus, enim vel feugiat commodo, tortor.",
    event: []
  },
  {
    id: 9,
    title: "House Renovation Program",
    update: "8/13/2022",
    url: "https://picsum.photos/300?text=9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur sed erat vitae dapibus. Pellentesque commodo metus vitae facilisis dapibus. Vestibulum diam felis, dignissim at.",
    event: []
  },
  {
    id: 10,
    title: "Elderly Education (Technology) Program",
    update: "8/4/2022",
    url: "https://picsum.photos/300?text=10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, feugiat et orci id, iaculis cursus turpis. Ut dapibus, enim vel feugiat commodo, tortor.",
    event: []
  },
]


export default function ProgramData(){
  return(
    dummyProgram.map((item) => {
      return(
        <div class="program-card" style={{backgroundImage: `url(${item.url})`}}>
          <div class="card-body">
            <h5 class="card-body-title">{item.title}</h5>
            <div class="card-body-content">New update: <time>{item.update}</time></div>
          </div>
        </div>
      )
    })
  )
}