export interface Env{

}


export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext):Promise<Response>{
		console.log(request.body);
		console.log(request.headers);

		if(request.method ==  "GET")	{
			return Response.json({
				"message": "You sent a request!!"
			});

		} else{
			return Response.json({
				message: "You did not sent a request!!"
			})
		}
	}
};
