import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  const [Search, setSearch] = useState(" ");
  const [FoodCat, setFoodCat] = useState([]);
  const [FoodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <Navbar />{" "}
      </div>

      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide mt-3"
          style={{ objectFit: "contaian !important" }}
        > 

</div>


          <div class="carousel-indicators" id="corousel">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/530417618/photo/baked-salmon-garnished-with-asparagus-and-tomatoes-with-herbs.webp?b=1&s=170667a&w=0&k=20&c=4FCfIIKB5bACQs1_IzxnVeEfBi4Q9KKcjnoJdJyOqVE="
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                class="d-block w-100"
                alt="..."
              />
          </div>

          <div class="box">
        <input type="text" class="input" name="txt" onmouseout="this.value = ''; this.blur();" value={Search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}  />
    <i class="fas fa-search"> Search </i>
</div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>
      </div>

      <div className="container">
        {FoodCat !== []
          ? FoodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data.id} className="fs-3 m-3">
                    {" "}
                    {data.CategoryName}{" "}
                  </div>
                  <hr />

                  {FoodItem !== [] ? (
                    FoodItem.filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.Name.toLowerCase().includes(Search.toLowerCase())
                    ).map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            FoodIem={filterItems}
                            options={filterItems.Options[0]}
                          >
                            {" "}
                          </Card>
                        </div>
                      );
                    })
                  ) : (
                    <div> No such Data </div>
                  )}
                </div>
              );
            })
          : " "}
      </div>

      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}

export default Home;
