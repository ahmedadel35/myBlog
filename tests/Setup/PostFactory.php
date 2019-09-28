<?php declare(strict_types = 1);

namespace Tests\Setup;

use App\Post;
use App\User;

class PostFactory
{
    private $ownedTo;

    public function ownedBy(User $user) : PostFactory
    {
        $this->ownedTo = $user;

        return $this;
    }

    public function create(
        string $methodName = 'create',
        int $num = null
    ) {
        return factory(Post::class, $num)->{$methodName}([
            'userId' => $this->ownedTo ?? factory(User::class)->create()->id
        ]);
    }
}