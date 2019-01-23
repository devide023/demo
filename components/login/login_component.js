;var login_component = (function(mod){
	var mod={
		data:function(){
			return {
				username:'',
				userpwd:''
			}
		},
	methods:{
		login:function(){
			var _this = this;
			var result={};
			axios.post("/192.168.0.207/web/login/",{username:_this.username,userpwd:_this.userpwd},{
				transformRequest:[function(data){
					return Qs.stringify(data);
					}],
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).then(function(r){
				result={msg:'ok',state:1};
			},function(r){
				result={msg:'error',state:0};
			});
			this.$emit('login',result);
		}
	},
	template:`
		<table border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td>用户名<input type="text" name="username" id="username" value="" v-model="username"/></td>
				<td>用户名<input type="password" name="userpwd" id="userpwd" value="" v-model="userpwd" /></td>
			</tr>
			<tr>
				<td colspan="2"><input type="button" name="btn_login" id="btn_login" value="登录" @click="login()" /></td>
			</tr>
		</table>
	`
	};
	return mod;
})(login_component||{});