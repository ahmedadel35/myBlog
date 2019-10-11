<?php

namespace App\Http\Controllers;

use App\Post;
use App\Task;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store(
        Request $request,
        Post $post
    ) : RedirectResponse {
        $this->authorize('updateCategory', $post);

        $post->addTask(
            request()->validate([
                'body' => 'required|min:5|max:70'
            ])['body']
        );

        return back();
    }

    public function update(
        Request $request,
        Post $post,
        Task $task
    ) : RedirectResponse {
        $this->authorize('update', $post);

        $done = request()->validate([
            'done' => 'nullable'
        ]);

        isset($done['done']) ? $task->complete() : $task->unComplete();
        
        return back();
    }
}
