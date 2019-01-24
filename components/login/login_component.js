;
var login_component = (function(mod) {
	var mod = {
		data: function() {
			return {
				username: '',
				userpwd: ''
			}
		},
		methods: {
			login: function() {
				var result = {};
				var _this = this;
				this.$axios.post("login/checklogin", {
					login_name: _this.username,
					pwd: _this.userpwd
				}).then(function(r) {
					console.log(r.data.list);
					result['msg'] = r.data.msg;
					result['state'] = 1;
					result['user'] = r.data.list[0];
				}, function(r) {
					result['msg'] = r.data.msg;
					result['state'] = 0;
					result['user'] = null;
				});
				this.$emit('checklogin', result);
			}
		},
		template: `
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
})(login_component || {});
