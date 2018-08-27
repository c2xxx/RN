# coding:UTF-8  


def readFile(fileName):
	f=open(fileName,"r")
	line=f.readline();
	#print(line)
	list=[]
	while(line):
		#print("---"+line)
		line=line.replace("	","")
		line=line.replace(" ","")
		#print(line)
		index=line.find(":{");
		if(index>-1):
			#print(line)
			menu=line[0:index]
			list.append(menu)
			#print(menu)
		line=f.readline();
	return list;


#readFile('PrintMenu.py')
menuList=readFile('../App.js')
menuList.sort()
print(menuList)
