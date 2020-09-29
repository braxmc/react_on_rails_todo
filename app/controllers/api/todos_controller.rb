class Api::TodosController < ApplicationController
  # actions in the controller
  # html
  # xml 
  # json - return object 
  # Redirect to other actions that does
  # no new, edit, html

  def index
    render json: Todo.all
  end
  
  # optional 
  # def show
  #   render json: Todo.find(params[:id])
  # end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: todo
    else
      render json: { errors: todo.errors }, status: :unprocessable_entity
    end 
  end

  def update
    todo = Todo.find(params[:id])
    if todo.update(todo_params)
      render json: todo
    else
      render json: { errors: todo.errors }, status: :unprocessable_entity
    end 
  end

  def destroy
    Todo.find(params[:id]).destroy
    render json: { message: 'Todo deleted' }
  end

  private

    def todo_params
      params.require(:todo).permit(:title, :complete)
    end

end