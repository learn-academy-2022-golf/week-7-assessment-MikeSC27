# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Below is the Application Controller which takes requests from external sources and brings them onto your page.  It also manages caches from the app, helper modules all helping to manage each session and continues the look and feel of ongoing interaction with the end user. This one currently has the index method set to send back the list of data availible for the model being queried. 
class BlogPostsController < ApplicationController
  def index

    # ---2)
# This is the call to be able to display all blog posts when called on.
    @posts = BlogPost.all
  end

  # ---3)
  # This is the one instance of blog post id availible when called.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This is the method to route the creation of a new blog post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
  # This is a validation check on the newly created blog post, if its good then it will be routed to @post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
  # This is the route for finding the specific blog post by id to update or edit it.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
  # This is the update blog post method validation, if checks good then is routed to @post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
  # This is the route to delete the specific blog post id from the database.
      redirect_to blog_posts_path
    end
  end

  # ---9)
# This is the super secret extra tough Strong Params, for extra security, keeping would be bad actors out of your routes and controllers to protect your database unless specifically allowed. This is meant to prevent Mass Assignment where a bad actor could gain privileges such as admin.  This is basically assigning data to mulitple database sections at the same time which could lead to allowing them access to overwrite data not meant to be changed. 
  private
  def blog_post_params
    # ---10)
# This is an instance of the blog post controller::parameters. It is specifically setting the blog post parameter as required with limited access to only :title and :content parameters within the blog post. Another words, no Mass Assignment allowed.
    params.require(:blog_post).permit(:title, :content)
  end
end
