// if statement
if(user.length > 0) {
	c.execute("select * from tweets where user = " + user + " %s order by time desc");
} else {
	c.execute("select * from tweets order by time desc");
}

// for loop
for(var i=0; i<result.length; i++) {
	console.log('this for has looped ' + i + ' times.');
}