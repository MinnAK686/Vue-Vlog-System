<template>
    <nav class="navbar navbar-expand-md bg-light sticky-top">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">Bloggy</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Post Entries</a>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'create-post'}" class="nav-link">Create Post</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">About</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  setup() {
    let id = 1

    return {id}
  }
}
</script>

<style>

</style>