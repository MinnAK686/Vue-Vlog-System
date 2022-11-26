<template>
  <div class="card post">
    <div class="img-fluid">
      <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" class="card-img-top" alt="..."/>
    </div>
    <div class="card-body">
      <div class="post-header">
        <h4 class="post-category">{{post.category}}</h4>
        <h5 class="post-title">
            <router-link :to="{name: 'post-detail',params: {id: post.id}}">{{post.title}}</router-link>
        </h5>
        <div class="post-info">
          <span>
            <a href="#">{{post.author}}</a>
          </span>
          <span>
            <a href="#">19 / 11 / 2022</a>
          </span>
          <span>
            <a href="#">10 Comments</a>
          </span>
        </div>
        <hr>
      </div>
      <div class="post-detail">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident culpa eligendi rerum quia dolorem consequuntur voluptatem delectus suscipit veritatis? Culpa, a cumque nobis exercitationem, magni libero quisquam excepturi ullam iusto quidem fuga sunt. Mollitia accusantium expedita architecto sit vero optio nam alias assumenda ex, voluptatem reprehenderit nihil cupiditate reiciendis! Assumenda ab ducimus quod distinctio quia, illum a perferendis maxime aut inventore itaque veritatis non deleniti cupiditate vel reiciendis deserunt! Architecto accusantium id officiis voluptate ullam. Beatae dignissimos recusandae enim itaque, sit error pariatur cum doloribus voluptatibus magni consequuntur ullam vero! Tempora facilis voluptate, sapiente enim eaque quaerat cumque quia.</p>
      </div>
    </div>
    <div class="card-footer text-muted">
      <div class="d-md-flex justify-content-between d-block">
        <div class="tags">
          <i class="bi bi-tags-fill"></i>
            <span v-for="tag in post.tags" :key="tag">
              <span>
                <router-link :to="{name: 'tags',params:{tag}}">{{tag}}</router-link>
              </span>
            </span>
        </div>
        <div class="share">
          <i class="bi bi-share-fill"></i>
          <span>
            <a href="#">Facebook</a>
          </span>
          <span>
            <a href="#">Twitter</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
}
</script>

<style>

</style>