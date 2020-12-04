import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	renderList() {
		return this.props.posts.map((post) => {
			return (
				<div className="item" key={post.id}>
					<div className="content">
						<h2>title: {post.title}</h2>
						<p> content: {post.body}</p>
					</div>
				</div>
			);
		});
	}

	render() {
		//console.log("No RENDER: " + this.props.posts);
		return <div>{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
