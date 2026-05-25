def trace_braces(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    stack = []
    in_string = False
    string_char = None
    in_block_comment = False
    
    for line_num, line in enumerate(lines, 1):
        i = 0
        while i < len(line):
            if in_block_comment:
                if line[i:i+2] == '*/':
                    in_block_comment = False
                    i += 2
                    continue
                i += 1
                continue
            
            if not in_string:
                if line[i:i+2] == '//':
                    break
                if line[i:i+2] == '/*':
                    in_block_comment = True
                    i += 2
                    continue
            
            char = line[i]
            if char in ['"', "'", '`']:
                if not in_string:
                    in_string = True
                    string_char = char
                elif string_char == char:
                    escaped = False
                    j = i - 1
                    while j >= 0 and line[j] == '\\':
                        escaped = not escaped
                        j -= 1
                    if not escaped:
                        in_string = False
                        string_char = None
            
            if not in_string and not in_block_comment:
                if char == '{':
                    stack.append((line_num, i, line))
                elif char == '}':
                    if not stack:
                        print(f"Error: Unmatched '}}' at line {line_num}")
                    else:
                        start_line, start_col, start_text = stack.pop()
                        print(f"Match: '{{' at line {start_line} matched with '}}' at line {line_num}")
            i += 1
            
    if stack:
        print("Unclosed braces remaining:")
        for line_num, col, line in stack:
            print(f"  Line {line_num}: {line.strip()}")

if __name__ == '__main__':
    trace_braces('/Users/amalegalsolutions/Desktop/AMAWORK/amaconnect/amaconnect/src/components/TopLawyerStories.tsx')
