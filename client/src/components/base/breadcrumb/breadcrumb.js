import React from 'react'

export default function Breadcrumb() {
  return (
    <div className="container">
    <nav class="breadcrumb">
      <a class="breadcrumb-item" href="/">
        Search
      </a>
      <a class="breadcrumb-item" href="/">
        Article
      </a>
      <span class="breadcrumb-item active" aria-current="page">
        News
      </span>
    </nav>
  </div>
  )
}
