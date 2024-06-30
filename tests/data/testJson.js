const testCases = [
    {
        name: 'cpp : hello world',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    cout << "hello world";\n' +
                'return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'cpp : print stdin',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n\n' +
                'using namespace std;\n' +
                'int main(){\n\n' +
                '    int a;\n' +
                '    while(cin >> a){\n' +
                '        cout << a << endl;\n' +
                '    }\n' +
                '    return 0;\n\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },

    },
    {
        name: 'nodejs : hello world',
        reqObject: {
            language: 'nodejs',
            script: 'console.log(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : print stdin',
        reqObject: {
            language: 'nodejs',
            script:
                'process.stdin.setEncoding(\'utf8\'); \n ' +
                'process.stdin.on(\'data\', (input) => { \n ' +
                '  console.log(input); \n ' +
                ' \n ' +
                '}); \n ',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : hello world',
        reqObject: {
            language: 'python',
            script: 'print(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : print stdin',
        reqObject: {
            language: 'python',
            script:
                'try:\n' +
                '    while(True):\n' +
                '        line = input()\n' +
                '        if not line:\n' +
                '            break\n' +
                '        print(line)\n' +
                'except EOFError:\n' +
                '    pass',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : hello world',
        reqObject: {
            language: 'c',
            script:
                '#include<stdio.h>\n\n' +
                'int main(){\n\n' +
                '    printf("hello world");\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : print stdin',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                'int main() {\n' +
                '    int number;\n' +
                '    while (scanf("%d", &number) == 1) {\n' +
                '        printf("%d\\n", number);\n' +
                '    } \n' +
                '    return 0;\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        System.out.println("hello world");\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner scanner = new Scanner(System.in);\n' +
                '        while (scanner.hasNextInt()) {\n' +
                '            int number = scanner.nextInt();\n' +
                '            System.out.println(number);\n' +
                '        } \n' +
                '        scanner.close();\n' +
                '    }\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print hello world',
        reqObject: {
            language: 'ruby',
            script:
                'print "hello world"'
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print stdin',
        reqObject: {
            language: 'ruby',
            script:
                'user_input = gets.chomp\n' +
                'puts user_input',
            stdin: '10\n'
        },
        expectedResponse: {
            val: '10\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'TLE test',
        reqObject: {
            language: 'nodejs',
            script: 'for(let i=0 ; ; ){i++}',
        },
        expectedResponse: {
            val: 'Time limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test',
        reqObject: {
            language: 'python',
            script: 'one_gb_data = bytearray(1000 * 1024 * 1024)',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 2',
        reqObject: {
            language: 'python',
            script:
                'import time\n' +
                'def consume_memory(target_mb, duration_sec):\n' +
                '    float_size = 8\n' +
                '    floats_per_mb = (1024 * 1024) // float_size\n' +
                '    total_floats = target_mb * floats_per_mb\n' +
                '    iterations = int(duration_sec / 0.1)\n' +
                '    floats_per_iteration = total_floats // iterations\n' +
                '    memory_hog = []\n' +
                '    for _ in range(iterations):\n' +
                '        memory_hog.extend([0.0] * floats_per_iteration)\n' +
                '        time.sleep(0.1)\n' +
                'consume_memory(1000, 1)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 3',
        reqObject: {
            language: 'python',
            script:
                'a = [100]\n' +
                'for i in a:\n' +
                '    a.append(i)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'OPEN AI test promptv1',
        reqObject: {
            language: 'promptv1',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
    {
        name: 'OPEN AI test promptv2',
        reqObject: {
            language: 'promptv2',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
        // Added 3 languages testCases (GO, RUST, PHP)
    {
        name: 'go : hello world',
        reqObject: {
            language: 'go',
            script:
                'package main\n' +
                'import "fmt"\n' +
                'func main() {\n' +
                '    fmt.Println("hello world")\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : print stdin',
        reqObject: {
            language: 'go',
            script:
                'package main\n' +
                'import "fmt"\n' +
                'import "bufio"\n' +
                'import "os"\n' +
                'func main() {\n' +
                '    scanner := bufio.NewScanner(os.Stdin)\n' +
                '    for scanner.Scan() {\n' +
                '        fmt.Println(scanner.Text())\n' +
                '    }\n' +
                '}\n',
            stdin: '1\n2\n3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'rust : hello world',
        reqObject: {
            language: 'rust',
            script:
                'fn main() {\n' +
                '    println!("hello world");\n' +
                '}',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'rust : print stdin',
        reqObject: {
            language: 'rust',
            script:
                'use std::io::{self, BufRead};\n' +
                'fn main() {\n' +
                '    let stdin = io::stdin();\n' +
                '    for line in stdin.lock().lines() {\n' +
                '        println!("{}", line.unwrap());\n' +
                '    }\n' +
                '}',
            stdin: '1 2 3\n',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'swift : hello world',
        reqObject: {
            language: 'swift',
            script:
                'print("hello world")',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'swift : print stdin',
        reqObject: {
            language: 'swift',
            script:
                'import Foundation\n' +
                'if let input = readLine() {\n' +
                '    print(input)\n' +
                '}',
            stdin: '1 2 3\n',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    // Some Casees
    {
        name: 'cpp : empty program',
        reqObject: {
            language: 'cpp',
            script: '',
        },
        expectedResponse: {
            val: '',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'cpp : infinite loop',
        reqObject: {
            language: 'cpp',
            script:
                '#include <iostream>\n' +
                'int main() {\n' +
                '    while(true) {}\n' +
                '    return 0;\n' +
                '}',
        },
        expectedResponse: {
            val: '',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : empty program',
        reqObject: {
            language: 'python',
            script: '',
        },
        expectedResponse: {
            val: '',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : division by zero',
        reqObject: {
            language: 'python',
            script:
                'try:\n' +
                '    result = 1 / 0\n' +
                'except ZeroDivisionError as e:\n' +
                '    print("Error:", str(e))\n',
        },
        expectedResponse: {
            val: 'Error: division by zero\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : empty program',
        reqObject: {
            language: 'java',
            script: '',
        },
        expectedResponse: {
            val: '',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : stack overflow',
        reqObject: {
            language: 'java',
            script:
                'public class Main {\n' +
                '    public static void main(String[] args) {\n' +
                '        main(args);\n' +
                '    }\n' +
                '}',
        },
        expectedResponse: {
            val: '',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : empty program',
        reqObject: {
            language: 'nodejs',
            script: '',
        },
        expectedResponse: {
            val: '',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : async function',
        reqObject: {
            language: 'nodejs',
            script:
                'async function main() {\n' +
                '    return new Promise((resolve, reject) => {\n' +
                '        setTimeout(() => resolve("Async function completed"), 100);\n' +
                '    });\n' +
                '}\n' +
                'main().then(console.log);',
        },
        expectedResponse: {
            val: 'Async function completed\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : empty program',
        reqObject: {
            language: 'ruby',
            script: '',
        },
        expectedResponse: {
            val: '',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : file read error',
        reqObject: {
            language: 'ruby',
            script:
                'begin\n' +
                '    File.open("non_existing_file.txt")\n' +
                'rescue Errno::ENOENT => e\n' +
                '    puts "File not found: #{e.message}"\n' +
                'end',
        },
        expectedResponse: {
            val: 'File not found: No such file or directory @ rb_sysopen - non_existing_file.txt\n',
            status: 200,
            error: 0,
        },
    },
]

module.exports = { testCases }
