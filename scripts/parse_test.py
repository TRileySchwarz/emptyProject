# -*- coding: utf-8 -*-

s = """

    Contract contains the correct amount of currently minted tokens
      ✓ the owner distributes tokens and users balances are updated (88ms)
      ✓ Whitelist values are empty
      ✓ Reverts when add addresses to whitelist is called from a BadGuy (100ms)
      ✓ Reverts when whitelisted values are removed by a BadGuy
      ✓ Reverts when address(0) is added to whitelist


"""
lines = s.split('\n')
for l in lines:
	#print(l)
	#if '✓' in l: print(l)
	count = 0
	for c in l:           # counts the number of spaces (except for the first 2, we will replace every 2 spaces with a '\tab')
		if c == ' ':
			count += 1
		else:
			break

	tabs = int((count - 2) / 2)
	if tabs < 0:
		tabs = 0

	for x in range(tabs):
		l = '\\tab ' + l

	# replace the '' symbol with the text '\checkmark'
	l = l.replace('✓','\checkmark ') # if it exists it will be replaced

	# add a '\\' to the end of every line
	l += '\\\\'

	print(l)
