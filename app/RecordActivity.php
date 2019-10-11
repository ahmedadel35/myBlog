<?php declare(strict_types = 1);

namespace App;

use App\Activity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Str;

trait RecordActivity
{
    public static function boot()
    {
        parent::boot();

        self::created(function (Model $model) {
            $model->recordActivity(
                'create_' . Str::snake(class_basename($model))
            );
        });

        self::updated(function (Model $model) {
            $model->recordActivity(
                'update_' . Str::snake(class_basename($model))
            );
        });
    }

    public function recordActivity(string $msg) : ?Activity
    {
        if (!auth()->check()) {
            return null;
        }

        if ($this instanceof Post) {
            $postId = $this->id;
        } elseif($this instanceof CommentReplay) {
            $postId = $this->comment->post->id;
        } else {
            $postId = $this->post->id;
        }

        return $this->activity()->create([
            'userId' => auth()->id(),
            'postId' => $postId,
            'info' => $msg
        ]);
    }

    public function activity() : MorphMany
    {
        return $this->morphMany(Activity::class, 'subject');
    }
}